import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIdToUser1582742543273 implements MigrationInterface {
    name = 'AddIdToUser1582742543273'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_d253c02c874557e5cac6932de0f"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_7870ccdbaef94578767cbc9a6dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_749a542db729f6d88c881f4d3cf"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_72361dd52b94f0e769ef8134fdd"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_749a542db729f6d88c881f4d3c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_72361dd52b94f0e769ef8134fd"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "user_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_72da1f98d8d8a4f2fb77754e2e0" PRIMARY KEY ("username", "id")`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "user_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "user_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_1988146b5f0dabb07a68232490f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_185d2bef46c4b5db6897297fde2" PRIMARY KEY ("role_id", "user_username", "user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD "user_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_7f2104edd7d93e18696df9aecda"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_2597c09fee31ec01b6734e838d1" PRIMARY KEY ("favorite_id", "user_username", "user_id")`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a8af976ec26f3c6dfca7f6612f" ON "user_role" ("user_id", "user_username") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6e580ddd5186de1d800822491e" ON "user_favorite" ("user_id", "user_username") `, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_f6e061bfd9ea5b8c2f70bf3f6e6" FOREIGN KEY ("user_id", "user_username") REFERENCES "user"("id","username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_10f1450140b614047e812808ef4" FOREIGN KEY ("user_id", "user_username") REFERENCES "user"("id","username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_a8af976ec26f3c6dfca7f6612fe" FOREIGN KEY ("user_id", "user_username") REFERENCES "user"("id","username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_6e580ddd5186de1d800822491e9" FOREIGN KEY ("user_id", "user_username") REFERENCES "user"("id","username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_6e580ddd5186de1d800822491e9"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_a8af976ec26f3c6dfca7f6612fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_10f1450140b614047e812808ef4"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_f6e061bfd9ea5b8c2f70bf3f6e6"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6e580ddd5186de1d800822491e"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a8af976ec26f3c6dfca7f6612f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "PK_2597c09fee31ec01b6734e838d1"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "PK_7f2104edd7d93e18696df9aecda" PRIMARY KEY ("favorite_id", "user_username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "PK_185d2bef46c4b5db6897297fde2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "PK_1988146b5f0dabb07a68232490f" PRIMARY KEY ("role_id", "user_username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_72da1f98d8d8a4f2fb77754e2e0"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_72361dd52b94f0e769ef8134fd" ON "user_favorite" ("user_username") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_749a542db729f6d88c881f4d3c" ON "user_role" ("user_username") `, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_72361dd52b94f0e769ef8134fdd" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_749a542db729f6d88c881f4d3cf" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_7870ccdbaef94578767cbc9a6dc" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_d253c02c874557e5cac6932de0f" FOREIGN KEY ("user_username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
