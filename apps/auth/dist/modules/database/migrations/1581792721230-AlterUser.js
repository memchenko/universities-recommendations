"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AlterUser1581792721230 {
    constructor() {
        this.name = 'AlterUser1581792721230';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6d4390ab1c0e8c86287d9f4c430"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "first_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "middle_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birth_date"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_6d4390ab1c0e8c86287d9f4c43"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "verified" boolean NOT NULL DEFAULT false`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verified"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender_id" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_6d4390ab1c0e8c86287d9f4c43" UNIQUE ("gender_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "birth_date" date`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "middle_name" character varying(100)`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "last_name" character varying(100)`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "first_name" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6d4390ab1c0e8c86287d9f4c430" FOREIGN KEY ("gender_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
}
exports.AlterUser1581792721230 = AlterUser1581792721230;
//# sourceMappingURL=1581792721230-AlterUser.js.map