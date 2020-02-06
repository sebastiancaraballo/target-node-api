import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['userName'])
@Unique(['email'])
export default class User {
    public static fromJson({ userName, email, gender, password, passwordConfirmation, id }: any) {
      const user = new User();
      user.userName = userName;
      user.email = email;
      user.gender = gender;
      user.password = password;
      user.passwordConfirmation = passwordConfirmation;
      user.id = id;
      return user;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public userName: string;

    @Column()
    public email: string;

    @Column()
    public gender: string;

    @Column()
    public password: string;

    @Column()
    public passwordConfirmation: string;
}
