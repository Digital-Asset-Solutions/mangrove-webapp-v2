/**
 * Custom gas requirement utilities to override the default values from @mangrovedao/mgv
 */

/**
 * Returns the custom default gas requirement for limit orders (2M gas)
 * This overrides the default from @mangrovedao/mgv library
 */
export function getCustomDefaultLimitOrderGasreq(): bigint {
  return 2_000_000n
}

/**
 * Returns the custom default gas requirement for order updates (2M gas)
 * This overrides the hardcoded value used in order updates
 */
export function getCustomDefaultUpdateOrderGasreq(): bigint {
  return 2_000_000n
}
