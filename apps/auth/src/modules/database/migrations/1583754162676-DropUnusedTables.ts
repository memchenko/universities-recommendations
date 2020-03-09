import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveUnusedTables1583754162676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {    
        await queryRunner.query(`DROP INDEX "IDX_666326dac19a911e8108b548c6"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_1d722c57635dc707eca7cf15af"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d0e5815877f7395a198a4cb0a4"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_557ceeced11f3cb273be717785"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4275c533e25f8ed117e492f91f"`, undefined);

        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_f634684acb47c1a158b83af5150"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_1d722c57635dc707eca7cf15af3"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_f5db31a841d18e56a0a1ef30f2d"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_557ceeced11f3cb273be7177856"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_4275c533e25f8ed117e492f91fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" DROP CONSTRAINT "CHK_1a827555352eb3f46e525f0301"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "PK_c487a23de92073ee1a7aee567ff"`, undefined);

        await queryRunner.query(`DROP TABLE "role_privilege"`, undefined);
        await queryRunner.query(`DROP TABLE "privilege"`, undefined);
        await queryRunner.query(`DROP TABLE "user_role"`, undefined);
        await queryRunner.query(`DROP TABLE "favorite_type"`, undefined);
        await queryRunner.query(`DROP TABLE "setting_type"`, undefined);
        await queryRunner.query(`DROP TABLE "user_favorite"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "favorite"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "favorite" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "favorite_type_id" integer NOT NULL, CONSTRAINT "REL_e73f73ba650e6fa140fd1fc436" UNIQUE ("favorite_type_id"), CONSTRAINT "PK_495675cec4fb09666704e4f610f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "REL_df46160e6aa79943b83c81e496" UNIQUE ("role_id"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "setting_type" ("id" SERIAL NOT NULL, "title" character varying(200) NOT NULL, CONSTRAINT "PK_e423059281ed2740a3de81bd149" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "favorite_type" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, CONSTRAINT "PK_a9a3da78ac944f0efc46bf4abbe" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_role" ("profile_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_3cd85bce5f154adc0cc7e914713" PRIMARY KEY ("profile_id", "role_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_favorite" ("profile_id" integer NOT NULL, "favorite_id" integer NOT NULL, CONSTRAINT "PK_24981274a6d521c202357390b54" PRIMARY KEY ("profile_id", "favorite_id"))`, undefined);

        await queryRunner.query(`CREATE INDEX "IDX_666326dac19a911e8108b548c6" ON "user_favorite" ("favorite_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55" ON "user_role" ("role_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d0e5815877f7395a198a4cb0a4" ON "user_role" ("user_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_1d722c57635dc707eca7cf15af" ON "user_favorite" ("user_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_557ceeced11f3cb273be717785" ON "role_privilege" ("privilege_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4275c533e25f8ed117e492f91f" ON "role_privilege" ("role_id") `, undefined);

        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360" FOREIGN KEY ("favorite_type_id") REFERENCES "favorite_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d535506122f777b6317cf9ab786" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_ad229bd5f1f244cdda2de730207" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_666326dac19a911e8108b548c60" FOREIGN KEY ("favorite_id") REFERENCES "favorite"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_4275c533e25f8ed117e492f91fe" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_557ceeced11f3cb273be7177856" FOREIGN KEY ("privilege_id") REFERENCES "privilege"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" ADD CONSTRAINT "CHK_1a827555352eb3f46e525f0301" CHECK (access_type IN ('r','w','rw'))`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "PK_c487a23de92073ee1a7aee567ff" PRIMARY KEY ("role_id", "privilege_id")`, undefined);
    }

}
