import {
  ArrowRightIcon,
  ExitIcon,
  FlashIcon,
  InfoIcon,
  PianoMenu,
  PlusIcon,
  RecentIcon,
  SaveIcon,
  SettingsIcon,
} from '@workchopin/workchopin-core';

export default async function Index() {
  return (
    <div className="h-screen flex justify-center flex-col gap-2 text-center">
      <h1 className="text-4xl font-bold">🎼 WorkChopin</h1>
      <h2 className="text-xl">The symphony of teamwork.</h2>
      <PianoMenu
        items={[
          {
            icon: <PlusIcon />,
            title: 'Create new session',
            subItem: { icon: <FlashIcon />, title: 'Quick session' },
          },
          { icon: <ArrowRightIcon />, title: 'Join existing session' },
          {
            icon: <SaveIcon />,
            title: 'Saved session',
            subItem: { icon: <RecentIcon />, title: 'Last session' },
          },
          {
            icon: <SettingsIcon />,
            title: 'Preferences',
            subItem: { icon: <InfoIcon />, title: 'About' },
          },
          {
            icon: <ExitIcon />,
            title: 'Exit',
          },
        ]}
      />
    </div>
  );
}
