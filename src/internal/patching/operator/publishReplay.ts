import { Observable } from '../../Observable';
import { ConnectableObservable } from '../../observable/ConnectableObservable';
import { publishReplay as higherOrder } from '../../operators/publishReplay';
import { OperatorFunction, MonoTypeOperatorFunction, SchedulerLike } from '../../../internal/types';

/* tslint:disable:max-line-length */
export function publishReplay<T>(this: Observable<T>, bufferSize?: number, windowTime?: number, scheduler?: SchedulerLike): ConnectableObservable<T>;
export function publishReplay<T, R>(this: Observable<T>, bufferSize?: number, windowTime?: number, selector?: OperatorFunction<T, R>): Observable<R>;
export function publishReplay<T>(this: Observable<T>, bufferSize?: number, windowTime?: number, selector?: MonoTypeOperatorFunction<T>, scheduler?: SchedulerLike): Observable<T>;
/* tslint:enable:max-line-length */

/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
export function publishReplay<T, R>(this: Observable<T>, bufferSize?: number,
                                    windowTime?: number,
                                    selectorOrScheduler?: SchedulerLike | OperatorFunction<T, R>,
                                    scheduler?: SchedulerLike): Observable<R> | ConnectableObservable<R> {

  return higherOrder<T, R>(bufferSize, windowTime, selectorOrScheduler as any, scheduler)(this);
}
