import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactor1583008463238 implements MigrationInterface {
    name = 'UserRefactor1583008463238'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_f6e061bfd9ea5b8c2f70bf3f6e6"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_10f1450140b614047e812808ef4"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_a8af976ec26f3c6dfca7f6612fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_6e580ddd5186de1d800822491e9"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a8af976ec26f3c6dfca7f6612f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6e580ddd5186de1d800822491e"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_185d2bef46c4b5db6897297fde2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_f634684acb47c1a158b83af5150" PRIMARY KEY ("role_id", "user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_2597c09fee31ec01b6734e838d1"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_f5db31a841d18e56a0a1ef30f2d" PRIMARY KEY ("favorite_id", "user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP COLUMN "user_username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_72da1f98d8d8a4f2fb77754e2e0"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d0e5815877f7395a198a4cb0a4" ON "user_role" ("user_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_1d722c57635dc707eca7cf15af" ON "user_favorite" ("user_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_256b86df89fe04be3b271180745" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_33d4fc93803e7192e150216fffb" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_1d722c57635dc707eca7cf15af3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_1d722c57635dc707eca7cf15af3"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_33d4fc93803e7192e150216fffb"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_256b86df89fe04be3b271180745"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_1d722c57635dc707eca7cf15af"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d0e5815877f7395a198a4cb0a4"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_72da1f98d8d8a4f2fb77754e2e0" PRIMARY KEY ("username", "id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_f5db31a841d18e56a0a1ef30f2d"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_2597c09fee31ec01b6734e838d1" PRIMARY KEY ("favorite_id", "user_username", "user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_f634684acb47c1a158b83af5150"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_185d2bef46c4b5db6897297fde2" PRIMARY KEY ("role_id", "user_username", "user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "user_username" character varying NOT NULL`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6e580ddd5186de1d800822491e" ON "user_favorite" ("user_username", "user_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a8af976ec26f3c6dfca7f6612f" ON "user_role" ("user_username", "user_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_6e580ddd5186de1d800822491e9" FOREIGN KEY ("user_username", "user_id") REFERENCES "user"("username","id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_a8af976ec26f3c6dfca7f6612fe" FOREIGN KEY ("user_username", "user_id") REFERENCES "user"("username","id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_10f1450140b614047e812808ef4" FOREIGN KEY ("user_username", "user_id") REFERENCES "user"("username","id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_f6e061bfd9ea5b8c2f70bf3f6e6" FOREIGN KEY ("user_username", "user_id") REFERENCES "user"("username","id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
