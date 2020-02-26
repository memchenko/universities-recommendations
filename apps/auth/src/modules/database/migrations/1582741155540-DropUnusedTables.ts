import {MigrationInterface, QueryRunner} from "typeorm";

export class DropUnusedTables1582741155540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "dictionary_item" DROP CONSTRAINT "FK_1608134a8953de13efe191dd36b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "profile" DROP CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2"`,
            undefined,
        );

        await queryRunner.query(`DROP TABLE "dictionary_item"`, undefined);
        await queryRunner.query(`DROP TABLE "dictionary"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE "dictionary" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "UQ_81db3138fa4c73261359f4f99eb" UNIQUE ("title"), CONSTRAINT "PK_d17df343bd5d01ed62dd0e55e4a" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "dictionary_item" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "dictionary_id" integer NOT NULL, CONSTRAINT "PK_2fca955528c6e57d6c5a4eee00e" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "dictionary_item" ADD CONSTRAINT "FK_1608134a8953de13efe191dd36b" FOREIGN KEY ("dictionary_id") REFERENCES "dictionary"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "profile" ("id" SERIAL NOT NULL, "user_id" character varying NOT NULL, CONSTRAINT "REL_d752442f45f258a8bdefeebb2f" UNIQUE ("user_id"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

}
