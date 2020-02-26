import {MigrationInterface, QueryRunner} from "typeorm";

function createTriggerOnDictionaryItem({
    name,
    dictionaryId,
    newRecordColumnName,
    tableNameForApplyingTrigger,
    dictionaryTitle,
  }: {
    name: string;
    dictionaryId: number;
    newRecordColumnName: string;
    tableNameForApplyingTrigger: string;
    dictionaryTitle: string;
  }): string {
    return `\
  CREATE OR REPLACE FUNCTION ${name}() RETURNS trigger AS $${name}_trigger$ \
  DECLARE \
  intersection int; \
  BEGIN \
  intersection := (SELECT COUNT(*) FROM dictionary_item WHERE (\
  dictionary_id = '${dictionaryId}' AND id = NEW.${newRecordColumnName}\
  )); \
  IF (intersection = 0) THEN \
  RAISE EXCEPTION 'Specified ${dictionaryTitle} is invalid'; \
  END IF; \
  RETURN NEW; \
  END; \
  $${name}_trigger$ LANGUAGE plpgsql; \
  CREATE TRIGGER ${name}_trigger \
  BEFORE INSERT OR UPDATE ON "${tableNameForApplyingTrigger}" \
  FOR EACH ROW EXECUTE PROCEDURE ${name}()`;
  }
  
  function dropTriggerOnDictionaryItem({
    name,
    tableName,
  }: {
    name: string;
    tableName: string;
  }) {
    return `\
  DROP TRIGGER ${name}_trigger ON "${tableName}" CASCADE; \
  DROP FUNCTION ${name}() CASCADE;`;
  }

export class NoCommonLookupTables1582655999778 implements MigrationInterface {
    name = 'NoCommonLookupTables1582655999778'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            dropTriggerOnDictionaryItem({
              name: 'validate_contact_type',
              tableName: 'contact',
            }),
            undefined,
          );
          await queryRunner.query(
            dropTriggerOnDictionaryItem({
              name: 'validate_favorite',
              tableName: 'favorite',
            }),
            undefined,
          );
          await queryRunner.query(
            dropTriggerOnDictionaryItem({
              name: 'validate_role',
              tableName: 'role',
            }),
            undefined,
          );
          await queryRunner.query(
            dropTriggerOnDictionaryItem({
              name: 'validate_setting',
              tableName: 'setting',
            }),
            undefined,
          );

        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_f54fc15278f23de594b49f60b7c"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_df46160e6aa79943b83c81e496e"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_744d4eed1aab9a8f3a897ac7a24"`, undefined);
        await queryRunner.query(`CREATE TABLE "setting_type" ("id" SERIAL NOT NULL, "title" character varying(200) NOT NULL, CONSTRAINT "PK_e423059281ed2740a3de81bd149" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "favorite_type" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, CONSTRAINT "PK_a9a3da78ac944f0efc46bf4abbe" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "user_id" character varying NOT NULL, CONSTRAINT "REL_d752442f45f258a8bdefeebb2f" UNIQUE ("user_id"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_role" ("profile_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_3cd85bce5f154adc0cc7e914713" PRIMARY KEY ("profile_id", "role_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d535506122f777b6317cf9ab78" ON "user_role" ("profile_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55" ON "user_role" ("role_id") `, undefined);
        await queryRunner.query(`CREATE TABLE "user_favorite" ("profile_id" integer NOT NULL, "favorite_id" integer NOT NULL, CONSTRAINT "PK_24981274a6d521c202357390b54" PRIMARY KEY ("profile_id", "favorite_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ad229bd5f1f244cdda2de73020" ON "user_favorite" ("profile_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_666326dac19a911e8108b548c6" ON "user_favorite" ("favorite_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "REL_f54fc15278f23de594b49f60b7"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "setting_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "title"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "REL_df46160e6aa79943b83c81e496"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "role_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" DROP COLUMN "title"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "REL_744d4eed1aab9a8f3a897ac7a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "contact_type_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "title"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "value" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "setting_type_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "profile_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" ADD "value" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "contact_type" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "value" character varying(200) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "profile_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360"`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "REL_e73f73ba650e6fa140fd1fc436"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "CHK_79495d93a84f1c2ef683e5c391" CHECK (contact_type IN (1,0))`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_b4c9b19a5639e9785e2d4e044b6" FOREIGN KEY ("setting_type_id") REFERENCES "setting_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_33d6736ff6858de5446f63a3e75" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360" FOREIGN KEY ("favorite_type_id") REFERENCES "favorite_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2" FOREIGN KEY ("user_id") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_c157f8acda11db69183f97bc773" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d535506122f777b6317cf9ab786" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_ad229bd5f1f244cdda2de730207" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" ADD CONSTRAINT "FK_666326dac19a911e8108b548c60" FOREIGN KEY ("favorite_id") REFERENCES "favorite"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            createTriggerOnDictionaryItem({
              name: 'validate_contact_type',
              newRecordColumnName: 'contact_type_id',
              dictionaryId: 0,
              dictionaryTitle: 'contact type',
              tableNameForApplyingTrigger: 'contact',
            }),
            undefined,
          );
          await queryRunner.query(
            createTriggerOnDictionaryItem({
              name: 'validate_favorite',
              newRecordColumnName: 'favorite_type_id',
              dictionaryId: 1,
              dictionaryTitle: 'favorite type',
              tableNameForApplyingTrigger: 'favorite',
            }),
            undefined,
          );
          await queryRunner.query(
            createTriggerOnDictionaryItem({
              name: 'validate_role',
              newRecordColumnName: 'role_id',
              dictionaryId: 2,
              dictionaryTitle: 'role',
              tableNameForApplyingTrigger: 'role',
            }),
            undefined,
          );
          await queryRunner.query(
            createTriggerOnDictionaryItem({
              name: 'validate_setting',
              newRecordColumnName: 'setting_id',
              dictionaryId: 3,
              dictionaryTitle: 'setting',
              tableNameForApplyingTrigger: 'setting',
            }),
            undefined,
          );
          
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_666326dac19a911e8108b548c60"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_favorite" DROP CONSTRAINT "FK_ad229bd5f1f244cdda2de730207"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d535506122f777b6317cf9ab786"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_c157f8acda11db69183f97bc773"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2"`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_33d6736ff6858de5446f63a3e75"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_b4c9b19a5639e9785e2d4e044b6"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "CHK_79495d93a84f1c2ef683e5c391"`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "REL_e73f73ba650e6fa140fd1fc436" UNIQUE ("favorite_type_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_e73f73ba650e6fa140fd1fc4360" FOREIGN KEY ("favorite_type_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "contact_type"`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "setting_type_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "title" character varying(150) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD "contact_type_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "REL_744d4eed1aab9a8f3a897ac7a2" UNIQUE ("contact_type_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "favorite" ADD "title" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD "role_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "REL_df46160e6aa79943b83c81e496" UNIQUE ("role_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "title" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "setting_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "REL_f54fc15278f23de594b49f60b7" UNIQUE ("setting_id")`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_666326dac19a911e8108b548c6"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ad229bd5f1f244cdda2de73020"`, undefined);
        await queryRunner.query(`DROP TABLE "user_favorite"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d535506122f777b6317cf9ab78"`, undefined);
        await queryRunner.query(`DROP TABLE "user_role"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "favorite_type"`, undefined);
        await queryRunner.query(`DROP TABLE "setting_type"`, undefined);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_744d4eed1aab9a8f3a897ac7a24" FOREIGN KEY ("contact_type_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_df46160e6aa79943b83c81e496e" FOREIGN KEY ("role_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_f54fc15278f23de594b49f60b7c" FOREIGN KEY ("setting_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
