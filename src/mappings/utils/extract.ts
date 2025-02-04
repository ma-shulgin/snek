
import { BaseCall, CallWith, Context, UnwrapFunc } from './types'


// function toBaseCall(extrinsic: ExtrinsicHandlerContext): BaseCall {
//   const caller = extrinsic.extrinsic.signer.toString();
//   const blockNumber = extrinsic.block.height.toString();
//   const timestamp = new Date(extrinsic.block.timestamp);

//   return { caller, blockNumber, timestamp };
// }


function toBaseEvent(event: Context): BaseCall {
  const caller = event.extrinsic?.signer.toString() || ''; 
  const blockNumber = event.block.height.toString();
  const timestamp = new Date(event.block.timestamp);

  return { caller, blockNumber, timestamp };
}


export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
  const baseCall = toBaseEvent(ctx);
  const unwrapped = unwrapFn(ctx);
  return { ...baseCall, ...unwrapped };
}

export const createTokenId = (collection: string, id: string) => `${collection}-${id}`

