import { Interaction } from '../../model/generated/_interaction'
import { Attribute } from '../../model/generated/_attribute'
import {EventHandlerContext } from '@subsquid/substrate-processor'

export type BaseCall = {
  caller: string;
  blockNumber: string;
  timestamp: Date;
}

export { Interaction }



export function collectionEventFrom(interaction: Interaction.MINT | Interaction.DESTROY,  basecall: BaseCall, meta: string): IEvent {
  return eventFrom(interaction, basecall, meta)
}

export function eventFrom(interaction: Interaction,  { blockNumber, caller, timestamp }: BaseCall, meta: string): IEvent {
  return {
    interaction,
    blockNumber: BigInt(blockNumber),
    caller,
    timestamp,
    meta
  }
}

export function attributeFrom(attribute: MetadataAttribute): Attribute {
  return new Attribute({}, {
    display: String(attribute.display_type),
    trait: String(attribute.trait_type),
    value: String(attribute.value)
  })
}

export type Context = EventHandlerContext

export type Optional<T> = T | null

export interface IEvent {
  interaction: Interaction;
  blockNumber: bigint,
  caller: string,
  timestamp: Date,
  meta: string;
}

export interface RmrkInteraction {
  id: string;
  metadata?: string;
}

export type BaseCollectionEvent = {
  id: string;
  caller: string;
}

export type OptionalMeta = {
  metadata?: string;
}

export type CreateCollectionEvent = BaseCollectionEvent & OptionalMeta

export type CreateTokenEvent = {
  collectionId: string;
  caller: string;
  metadata?: string;
  sn: string;
}

export type TransferTokenEvent = {
  collectionId: string;
  sn: string;
  caller: string;
  to: string;
}

export type BurnTokenEvent = CreateTokenEvent

export type DestroyCollectionEvent = BaseCollectionEvent

export type CallWith<T> = BaseCall & T

export type EntityConstructor<T> = {
  new (...args: any[]): T;
};

export type SomethingWithMeta = {
  metadata: string
}
export type UnwrapFunc<T> = (ctx: Context) => T
export type SanitizerFunc = (url: string) => string

export function ensure<T>(value: any): T {
  return value as T
}

export type TokenMetadata = {
  name?: string
  description: string
  external_url?: string
  image: string
  animation_url?: string
  attributes?: MetadataAttribute[]
}

export type MetadataAttribute = {
  display_type?: DisplayType
  trait_type?: string
  value: number | string
}

export enum DisplayType {
  null,
  'boost_number',
  'number',
  'boost_percentage',
}
