import { Switch } from '@mantine/core';

export default function NightSwitch({checked, setChecked}) {
  return (
    <Switch
      // onLabel="light"
      offLabel="night"
      className={'header--switch'}
      checked={checked}
      onChange={(event) => {
        setChecked(event.currentTarget.checked)
      }}
      size="lg"
      color="yellow"
    />
  )
}