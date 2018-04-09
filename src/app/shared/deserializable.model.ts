/* Get JSON from an Object */

export interface Deserializable<T> {
  deserialize(input: any): T;
}
