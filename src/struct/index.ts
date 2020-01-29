export interface MessageBus<T = any> {
  id: string;
  data?: T;
}
