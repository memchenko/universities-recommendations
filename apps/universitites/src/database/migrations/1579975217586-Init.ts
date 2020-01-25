import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1579975217586 implements MigrationInterface {
    name = 'Init1579975217586'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "university" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "faculty" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "universityId" integer, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "facultyId" integer, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "specialty" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "departmentId" integer, CONSTRAINT "PK_9cf4ae334dc4a1ab1e08956460e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "competition" ("id" SERIAL NOT NULL, "enrollee" integer NOT NULL DEFAULT '0', "slots" integer NOT NULL DEFAULT '0', "specialtyId" integer, CONSTRAINT "PK_a52a6248db574777b226e9445bc" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "geolocation" ("id" SERIAL NOT NULL, "longitude" double precision NOT NULL, "latitude" double precision NOT NULL, CONSTRAINT "PK_36aa5f8d0de597a21a725ee1cc2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "geolocation_faculty" ("geolocationId" integer NOT NULL, "facultyId" integer NOT NULL, CONSTRAINT "PK_75afcf102821e0951a26c23ba5c" PRIMARY KEY ("geolocationId", "facultyId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_32c9f7a6c983f85d2cd8d6ef37" ON "geolocation_faculty" ("geolocationId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_790e99b289f5ffb145e786dd7c" ON "geolocation_faculty" ("facultyId") `, undefined);
        await queryRunner.query(`ALTER TABLE "faculty" ADD CONSTRAINT "FK_88e74db0a37a1534a352d4a330c" FOREIGN KEY ("universityId") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_1548ea92c71a222352108c4126d" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "specialty" ADD CONSTRAINT "FK_1cb082f3e2bae05d5b3e543fb57" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" ADD CONSTRAINT "FK_f11e7d198c2764673b480794630" FOREIGN KEY ("specialtyId") REFERENCES "specialty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_faculty" ADD CONSTRAINT "FK_32c9f7a6c983f85d2cd8d6ef370" FOREIGN KEY ("geolocationId") REFERENCES "geolocation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_faculty" ADD CONSTRAINT "FK_790e99b289f5ffb145e786dd7cb" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "geolocation_faculty" DROP CONSTRAINT "FK_790e99b289f5ffb145e786dd7cb"`, undefined);
        await queryRunner.query(`ALTER TABLE "geolocation_faculty" DROP CONSTRAINT "FK_32c9f7a6c983f85d2cd8d6ef370"`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" DROP CONSTRAINT "FK_f11e7d198c2764673b480794630"`, undefined);
        await queryRunner.query(`ALTER TABLE "specialty" DROP CONSTRAINT "FK_1cb082f3e2bae05d5b3e543fb57"`, undefined);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_1548ea92c71a222352108c4126d"`, undefined);
        await queryRunner.query(`ALTER TABLE "faculty" DROP CONSTRAINT "FK_88e74db0a37a1534a352d4a330c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_790e99b289f5ffb145e786dd7c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_32c9f7a6c983f85d2cd8d6ef37"`, undefined);
        await queryRunner.query(`DROP TABLE "geolocation_faculty"`, undefined);
        await queryRunner.query(`DROP TABLE "geolocation"`, undefined);
        await queryRunner.query(`DROP TABLE "competition"`, undefined);
        await queryRunner.query(`DROP TABLE "specialty"`, undefined);
        await queryRunner.query(`DROP TABLE "department"`, undefined);
        await queryRunner.query(`DROP TABLE "faculty"`, undefined);
        await queryRunner.query(`DROP TABLE "university"`, undefined);
    }

}
