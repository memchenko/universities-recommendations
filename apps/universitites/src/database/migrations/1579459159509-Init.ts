import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1579459159509 implements MigrationInterface {
    name = 'Init1579459159509'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "university_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_5efa5ba9addbbd709fdd9189653" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "faculty_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "universityId" integer, CONSTRAINT "PK_ec68ebf63ba5218949847de2ea3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "department_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "facultyId" integer, CONSTRAINT "PK_39ba79a89795743b899acf552c3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "specialty_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "departmentId" integer, CONSTRAINT "PK_26b5bcd06d12682fb36ed11cec2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "competition_entity" ("id" SERIAL NOT NULL, "enrollee" integer NOT NULL DEFAULT '0', "slots" integer NOT NULL DEFAULT '0', "specialtyId" integer, CONSTRAINT "PK_1d100876f79bd6383843bdd7ee3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "geolocation_entity" ("id" SERIAL NOT NULL, "longitude" double precision NOT NULL, "latitude" double precision NOT NULL, CONSTRAINT "PK_93991d7a95dd21d43a101e7bddc" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "geolocation_entity_faculties_faculty_entity" ("geolocationEntityId" integer NOT NULL, "facultyEntityId" integer NOT NULL, CONSTRAINT "PK_9919f31f9bf0500dfa087ac0d43" PRIMARY KEY ("geolocationEntityId", "facultyEntityId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a5e21c2a4470e184e653a9d840" ON "geolocation_entity_faculties_faculty_entity" ("geolocationEntityId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b23591cd3cf90d0038a868782c" ON "geolocation_entity_faculties_faculty_entity" ("facultyEntityId") `, undefined);
        await queryRunner.query(`ALTER TABLE "faculty_entity" ADD CONSTRAINT "FK_d6c19ff6eda2d2c2445da765853" FOREIGN KEY ("universityId") REFERENCES "university_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "department_entity" ADD CONSTRAINT "FK_f49a0bd89f66d3aeb2c75319fc5" FOREIGN KEY ("facultyId") REFERENCES "faculty_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "specialty_entity" ADD CONSTRAINT "FK_47ffbb9ae9aca3a69c18acb4b75" FOREIGN KEY ("departmentId") REFERENCES "department_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "competition_entity" ADD CONSTRAINT "FK_658217a40e908f86b338ac54496" FOREIGN KEY ("specialtyId") REFERENCES "specialty_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_entity_faculties_faculty_entity" ADD CONSTRAINT "FK_a5e21c2a4470e184e653a9d8400" FOREIGN KEY ("geolocationEntityId") REFERENCES "geolocation_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_entity_faculties_faculty_entity" ADD CONSTRAINT "FK_b23591cd3cf90d0038a868782cc" FOREIGN KEY ("facultyEntityId") REFERENCES "faculty_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "geolocation_entity_faculties_faculty_entity" DROP CONSTRAINT "FK_b23591cd3cf90d0038a868782cc"`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_entity_faculties_faculty_entity" DROP CONSTRAINT "FK_a5e21c2a4470e184e653a9d8400"`, undefined);
        await queryRunner.query(`ALTER TABLE "competition_entity" DROP CONSTRAINT "FK_658217a40e908f86b338ac54496"`, undefined);
        await queryRunner.query(`ALTER TABLE "specialty_entity" DROP CONSTRAINT "FK_47ffbb9ae9aca3a69c18acb4b75"`, undefined);
        await queryRunner.query(`ALTER TABLE "department_entity" DROP CONSTRAINT "FK_f49a0bd89f66d3aeb2c75319fc5"`, undefined);
        await queryRunner.query(`ALTER TABLE "faculty_entity" DROP CONSTRAINT "FK_d6c19ff6eda2d2c2445da765853"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b23591cd3cf90d0038a868782c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a5e21c2a4470e184e653a9d840"`, undefined);
        await queryRunner.query(`DROP TABLE "geolocation_entity_faculties_faculty_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "geolocation_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "competition_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "specialty_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "department_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "faculty_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "university_entity"`, undefined);
    }

}
