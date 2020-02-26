import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveProfile1582740963427 implements MigrationInterface {
    name = 'RemoveProfile1582740963427'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_33d6736ff6858de5446f63a3e75"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_c157f8acda11db69183f97bc773"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d535506122f777b6317cf9ab786"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_ad229bd5f1f244cdda2de730207"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d535506122f777b6317cf9ab78"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ad229bd5f1f244cdda2de73020"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" RENAME COLUMN "profile_id" TO "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "profile_id" TO "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" RENAME COLUMN "profile_id" TO "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" RENAME CONSTRAINT "PK_3cd85bce5f154adc0cc7e914713" TO "PK_1988146b5f0dabb07a68232490f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" RENAME COLUMN "profile_id" TO "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" RENAME CONSTRAINT "PK_24981274a6d521c202357390b54" TO "PK_7f2104edd7d93e18696df9aecda"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_1988146b5f0dabb07a68232490f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_32a6fc2fcb019d8e3a8ace0f55f" PRIMARY KEY ("role_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_32a6fc2fcb019d8e3a8ace0f55f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_1988146b5f0dabb07a68232490f" PRIMARY KEY ("role_id", "user_username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_7f2104edd7d93e18696df9aecda"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_666326dac19a911e8108b548c60" PRIMARY KEY ("favorite_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_666326dac19a911e8108b548c60"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_7f2104edd7d93e18696df9aecda" PRIMARY KEY ("favorite_id", "user_username")`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_749a542db729f6d88c881f4d3c" ON "user_role" ("user_username") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_72361dd52b94f0e769ef8134fd" ON "user_favorite" ("user_username") `, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_d253c02c874557e5cac6932de0f" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_7870ccdbaef94578767cbc9a6dc" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_749a542db729f6d88c881f4d3cf" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_72361dd52b94f0e769ef8134fdd" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_72361dd52b94f0e769ef8134fdd"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_749a542db729f6d88c881f4d3cf"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_7870ccdbaef94578767cbc9a6dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_d253c02c874557e5cac6932de0f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_72361dd52b94f0e769ef8134fd"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_749a542db729f6d88c881f4d3c"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_7f2104edd7d93e18696df9aecda"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_666326dac19a911e8108b548c60" PRIMARY KEY ("favorite_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD "user_username" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_666326dac19a911e8108b548c60"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_7f2104edd7d93e18696df9aecda" PRIMARY KEY ("user_username", "favorite_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_1988146b5f0dabb07a68232490f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_32a6fc2fcb019d8e3a8ace0f55f" PRIMARY KEY ("role_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "user_username" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_32a6fc2fcb019d8e3a8ace0f55f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_1988146b5f0dabb07a68232490f" PRIMARY KEY ("user_username", "role_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "user_username" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "user_username" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" RENAME CONSTRAINT "PK_7f2104edd7d93e18696df9aecda" TO "PK_24981274a6d521c202357390b54"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" RENAME COLUMN "user_username" TO "profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" RENAME CONSTRAINT "PK_1988146b5f0dabb07a68232490f" TO "PK_3cd85bce5f154adc0cc7e914713"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" RENAME COLUMN "user_username" TO "profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "user_username" TO "profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" RENAME COLUMN "user_username" TO "profile_id"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ad229bd5f1f244cdda2de73020" ON "user_favorite" ("profile_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d535506122f777b6317cf9ab78" ON "user_role" ("profile_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_ad229bd5f1f244cdda2de730207" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d535506122f777b6317cf9ab786" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_c157f8acda11db69183f97bc773" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_33d6736ff6858de5446f63a3e75" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
