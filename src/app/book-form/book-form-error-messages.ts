export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const BookFormErrorMessages = [
  new ErrorMessage(
    'user',
    'required',
    'Ein Bneutzername muss angegeben werden!'
  ),
  new ErrorMessage(
    'user',
    'email',
    'Ein Benutzername muss einer Email-Adresse entsprechen!'
  ),
  new ErrorMessage(
    'password',
    'required',
    'Ein Passwort muss angegeben werden!'
  ),
  new ErrorMessage(
    'password',
    'minlength',
    'Ein Passwort muss mindestens 6 Zeichen lang sein!'
  ),
];
