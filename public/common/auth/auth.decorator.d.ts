import { Role } from 'src/common/types';
export declare const AllowAuthenticated: (...roles: Role[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const GetUser: (...dataOrPipes: any[]) => ParameterDecorator;
