import React from 'react'
type RandomNumberType = {
    value: number
}
// If isPositive is true, you cannot pass isNegative or isZero.
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
// If isNegative is true, you cannot pass isPositive or isZero.
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
// If isZero is true, you cannot pass isPositive or isNegative.
type Zero = RandomNumberType & {
    isNegative: never
    isPositive?: never
    isZero?: boolean
}

// RandomNumberProps is a union of three types that can represent only one of these types at a time.
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}
