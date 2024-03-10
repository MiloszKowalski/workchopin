import { PianoMenu, Table } from '@workchopin/workchopin-core';

export default async function Index() {
  return (
    <div className="h-screen flex justify-center flex-col gap-2 text-center">
      <h1 className="text-4xl font-bold">🎼 WorkChopin</h1>
      <h2 className="text-xl">The symphony of teamwork.</h2>
      <PianoMenu
        items={[
          {
            icon: <>➕</>,
            title: 'Create new session',
            subItem: { icon: <>⚡</>, title: 'Quick session' },
          },
          { icon: <>➡️</>, title: 'Join existing session' },
          {
            icon: <>💾</>,
            title: 'Saved session',
            subItem: { icon: <>🕑</>, title: 'Last session' },
          },
          {
            icon: <>⚙️</>,
            title: 'Preferences',
            subItem: { icon: <>ℹ️</>, title: 'About' },
          },
          {
            icon: <>🚪</>,
            title: 'Exit',
          },
        ]}
      />
    </div>
  );
}
