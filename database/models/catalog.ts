import {Column, PrimaryGeneratedColumn, CreateDateColumn, Entity, UpdateDateColumn} from 'typeorm';

@Entity()
export class Catalog{
    @PrimaryGeneratedColumn('uuid')
    public id : string;

    @Column()
    public price : number;

    @Column()
    public size : number[]|string[];

    @Column()
    public color: string[];
    
    @Column()
    public pieces: number;

    @CreateDateColumn({ name: 'createdAt' })
    public created_at: Date;

    @UpdateDateColumn({ name: 'updatedAt' })
    public updated_at: Date;
}