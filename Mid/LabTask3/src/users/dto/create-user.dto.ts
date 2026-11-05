
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  Matches,
  IsInt,
  Min,
  Max,
  IsIn,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  fullName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)
  password!: string;

  @IsNotEmpty()
  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^01\d{9}$/)
  phone!: string;

  @IsNotEmpty()
  @IsIn(
    ['student', 'teacher'])
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}
