// import { registerDecorator, ValidationOptions } from 'class-validator';
// import { IsUniqueValidator } from '../validations/is-unique.validator';

// export function IsUnique(
//   property: string,
//   validationOptions?: ValidationOptions,
// ) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [property],
//       validator: IsUniqueValidator,
//     });
//   };
// }
