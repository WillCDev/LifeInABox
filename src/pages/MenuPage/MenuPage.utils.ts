import { Position } from 'common/components/BoxHouse/BoxHouse'

export const getPosition = (
  index: number,
  selectedIndex: number
): Position | null => {
  if (!index || !selectedIndex) return null
  if (index > selectedIndex) return Position.After
  if (index === selectedIndex) return Position.Before
  return Position.Center
}
