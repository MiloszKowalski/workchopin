import {
  ArrowRightIcon,
  ExitIcon,
  FlashIcon,
  InfoIcon,
  LanguageSelect,
  PianoMenu,
  PlusIcon,
  RecentIcon,
  SaveIcon,
  SettingsIcon,
} from '@workchopin/workchopin-core';
import { I18nParams, useTranslation } from '@workchopin/workchopin-i18n';

export default async function Index({ params: { lng } }: I18nParams) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen flex-col items-center p-4">
      <LanguageSelect />
      <div className="my-auto flex flex-col justify-center gap-2 text-center ">
        <h1 className="text-4xl font-bold">🎼 {t('title')}</h1>
        <h2 className="text-xl">{t('subtitle')}</h2>
        <PianoMenu
          items={[
            {
              icon: <PlusIcon />,
              title: t('scrum-poker.create-new-session'),
              subItem: { icon: <FlashIcon />, title: t('scrum-poker.quick-session') },
            },
            { icon: <ArrowRightIcon />, title: t('scrum-poker.join-existing-room') },
            {
              icon: <SaveIcon />,
              title: t('scrum-poker.saved-sessions'),
              subItem: { icon: <RecentIcon />, title: t('scrum-poker.last-session') },
            },
            {
              icon: <SettingsIcon />,
              title: t('scrum-poker.preferences'),
              subItem: { icon: <InfoIcon />, title: t('scrum-poker.about') },
            },
            {
              icon: <ExitIcon />,
              title: t('scrum-poker.exit'),
            },
          ]}
        />
      </div>
    </div>
  );
}
