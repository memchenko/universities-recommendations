"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triggers_1 = require("../utils/triggers");
class DropUserTrigger1581793210273 {
    async up(queryRunner) {
        await queryRunner.query(triggers_1.dropTriggerOnDictionaryItem({
            name: 'validate_gender',
            tableName: 'user',
        }), undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(triggers_1.createTriggerOnDictionaryItem({
            name: 'validate_gender',
            newRecordColumnName: 'gender_id',
            dictionaryId: 4,
            dictionaryTitle: 'gender',
            tableNameForApplyingTrigger: 'user',
        }), undefined);
    }
}
exports.DropUserTrigger1581793210273 = DropUserTrigger1581793210273;
//# sourceMappingURL=1581793210273-DropUserTrigger.js.map