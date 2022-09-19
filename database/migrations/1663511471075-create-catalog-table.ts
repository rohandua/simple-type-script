import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createCatalogTable1663511471075 implements MigrationInterface {
    name = 'createCatalogTable1663511471075'
    private _table = 'catalog';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this._table,
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        length: '48',
                        isPrimary: true,
                    },
                    // {
                    //     name: 'price',
                    //     type: 'float'
                    // },
                    {
                        name: 'size',
                        type: 'varchar',
                        length: '48',
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        length: '48',
                    },
                    {
                        name: 'createdAt',
                        type: 'datetime',
                    },
                    // {
                    //     name:'pieces',
                    //     type: 'number'
                    // },
                    {
                        name: 'updatedAt',
                        type: 'datetime',
                    },
                ],
            }),
            true,
        );
        await queryRunner.query(
            `ALTER TABLE ${this._table} CHANGE createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`,
        );
        await queryRunner.query(
            `ALTER TABLE ${this._table} CHANGE updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${this._table}`);
    }

}
