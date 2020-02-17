import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1581362731751 implements MigrationInterface {
  name = 'Init1581362731751';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "dictionary" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "UQ_81db3138fa4c73261359f4f99eb" UNIQUE ("title"), CONSTRAINT "PK_d17df343bd5d01ed62dd0e55e4a" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "dictionary_item" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "dictionary_id" integer NOT NULL, CONSTRAINT "PK_2fca955528c6e57d6c5a4eee00e" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "contact" ("id" SERIAL NOT NULL, "title" character varying(150) NOT NULL, "contact_type_id" integer NOT NULL, CONSTRAINT "REL_744d4eed1aab9a8f3a897ac7a2" UNIQUE ("contact_type_id"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "favorite" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "favorite_type_id" integer NOT NULL, CONSTRAINT "REL_e73f73ba650e6fa140fd1fc436" UNIQUE ("favorite_type_id"), CONSTRAINT "PK_495675cec4fb09666704e4f610f" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "REL_df46160e6aa79943b83c81e496" UNIQUE ("role_id"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "setting" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "setting_id" integer NOT NULL, CONSTRAINT "REL_f54fc15278f23de594b49f60b7" UNIQUE ("setting_id"), CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying(100) NOT NULL, "last_name" character varying(100), "middle_name" character varying(100), "birth_date" date, "password" character varying NOT NULL, "gender_id" integer, CONSTRAINT "REL_6d4390ab1c0e8c86287d9f4c43" UNIQUE ("gender_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "dictionary_item" ADD CONSTRAINT "FK_1608134a8953de13efe191dd36b" FOREIGN KEY ("dictionary_id") REFERENCES "dictionary"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "contact" ADD CONSTRAINT "FK_744d4eed1aab9a8f3a897ac7a24" FOREIGN KEY ("contact_type_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite" ADD CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360" FOREIGN KEY ("favorite_type_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "role" ADD CONSTRAINT "FK_df46160e6aa79943b83c81e496e" FOREIGN KEY ("role_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "setting" ADD CONSTRAINT "FK_f54fc15278f23de594b49f60b7c" FOREIGN KEY ("setting_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_6d4390ab1c0e8c86287d9f4c430" FOREIGN KEY ("gender_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_6d4390ab1c0e8c86287d9f4c430"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "setting" DROP CONSTRAINT "FK_f54fc15278f23de594b49f60b7c"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "role" DROP CONSTRAINT "FK_df46160e6aa79943b83c81e496e"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite" DROP CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "contact" DROP CONSTRAINT "FK_744d4eed1aab9a8f3a897ac7a24"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "dictionary_item" DROP CONSTRAINT "FK_1608134a8953de13efe191dd36b"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "user"`, undefined);
    await queryRunner.query(`DROP TABLE "setting"`, undefined);
    await queryRunner.query(`DROP TABLE "role"`, undefined);
    await queryRunner.query(`DROP TABLE "favorite"`, undefined);
    await queryRunner.query(`DROP TABLE "contact"`, undefined);
    await queryRunner.query(`DROP TABLE "dictionary_item"`, undefined);
    await queryRunner.query(`DROP TABLE "dictionary"`, undefined);
  }
}
