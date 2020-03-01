import {MigrationInterface, QueryRunner} from "typeorm";

export class Refactor1583008150970 implements MigrationInterface {
    name = 'Refactor1583008150970'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_4275c533e25f8ed117e492f91fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_557ceeced11f3cb273be7177856"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "CHK_88233a672fe01e06145b24045f"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" DROP COLUMN "title"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "PK_cb16acd57f012bbd23b5c5aa1dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "PK_c487a23de92073ee1a7aee567ff" PRIMARY KEY ("role_id", "privilege_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP COLUMN "privilege_type"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" ADD "object" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" ADD "access_type" character varying NOT NULL`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4275c533e25f8ed117e492f91f" ON "role_privilege" ("role_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_557ceeced11f3cb273be717785" ON "role_privilege" ("privilege_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" ADD CONSTRAINT "CHK_1a827555352eb3f46e525f0301" CHECK (access_type IN ('r','w','rw'))`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_4275c533e25f8ed117e492f91fe" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_557ceeced11f3cb273be7177856" FOREIGN KEY ("privilege_id") REFERENCES "privilege"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_557ceeced11f3cb273be7177856"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_4275c533e25f8ed117e492f91fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" DROP CONSTRAINT "CHK_1a827555352eb3f46e525f0301"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_557ceeced11f3cb273be717785"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4275c533e25f8ed117e492f91f"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" DROP COLUMN "access_type"`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" DROP COLUMN "object"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD "privilege_type" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "PK_c487a23de92073ee1a7aee567ff"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "PK_cb16acd57f012bbd23b5c5aa1dc" PRIMARY KEY ("id", "role_id", "privilege_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "privilege" ADD "title" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "CHK_88233a672fe01e06145b24045f" CHECK (((privilege_type)::text = ANY ((ARRAY['r'::character varying, 'w'::character varying, 'rw'::character varying])::text[])))`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_557ceeced11f3cb273be7177856" FOREIGN KEY ("privilege_id") REFERENCES "privilege"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_4275c533e25f8ed117e492f91fe" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
