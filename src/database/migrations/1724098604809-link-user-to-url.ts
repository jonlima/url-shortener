import { MigrationInterface, QueryRunner } from 'typeorm';

export class LinkUserToUrl1724098604809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "urls" ADD CONSTRAINT "FK_user_url" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "urls" DROP CONSTRAINT "FK_user_url"`);
  }
}
