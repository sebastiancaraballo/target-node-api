import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['label'])
export default class Topic {
    public static fromJson({ label, icon, id }: any) {
        const topic = new Topic();
        topic.label = label;
        topic.icon = icon;
        topic.id = id;
        return topic;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public label: string;

    @Column()
    public icon: string;
}
