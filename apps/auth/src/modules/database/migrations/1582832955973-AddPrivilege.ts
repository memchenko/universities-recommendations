import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPrivilege1582832955973 implements MigrationInterface {
    name = 'AddPrivilege1582832955973'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "CHK_79495d93a84f1c2ef683e5c391"`, undefined);
        await queryRunner.query(`CREATE TABLE "privilege" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, CONSTRAINT "PK_b1691196ff9c996998bab2e406e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role_privilege" ("id" SERIAL NOT NULL, "privilege_type" character varying NOT NULL, "role_id" integer NOT NULL, "privilege_id" integer NOT NULL, CONSTRAINT "CHK_88233a672fe01e06145b24045f" CHECK (privilege_type IN ('r','w','rw')), CONSTRAINT "PK_cb16acd57f012bbd23b5c5aa1dc" PRIMARY KEY ("id", "role_id", "privilege_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "CHK_b1018db5231d3604ba5bc6e9c6" CHECK (contact_type IN ('1','0'))`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_4275c533e25f8ed117e492f91fe" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" ADD CONSTRAINT "FK_557ceeced11f3cb273be7177856" FOREIGN KEY ("privilege_id") REFERENCES "privilege"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_557ceeced11f3cb273be7177856"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_privilege" DROP CONSTRAINT "FK_4275c533e25f8ed117e492f91fe"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "CHK_b1018db5231d3604ba5bc6e9c6"`, undefined);
        await queryRunner.query(`DROP TABLE "role_privilege"`, undefined);
        await queryRunner.query(`DROP TABLE "privilege"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "CHK_79495d93a84f1c2ef683e5c391" CHECK ((contact_type = ANY (ARRAY[1, 0])))`, undefined);
    }

}
