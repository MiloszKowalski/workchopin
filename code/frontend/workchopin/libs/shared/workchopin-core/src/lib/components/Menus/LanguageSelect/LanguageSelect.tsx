'use client';

import * as Select from '@radix-ui/react-select';
import { languageNames } from '@workchopin/workchopin-i18n';
import { useTranslation } from '@workchopin/workchopin-i18n/client';
import { usePathname, useRouter } from 'next/navigation';
import { CheckIcon, ChevronDownIcon } from '../../../icons';
import { useMemo, useState } from 'react';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [activeLanugage, setActiveLanguage] = useState(i18n.language);
  const otherLanguages = useMemo(
    () =>
      Array.from(languageNames.entries())
        .filter(([code]) => code !== activeLanugage)
        .sort(([_aKey, aName], [_bKey, bName]) => aName.localeCompare(bName)),
    [activeLanugage],
  );

  return (
    <Select.Root
      defaultValue={i18n.language}
      onValueChange={async (newLanguage) => {
        const previousLanguage = pathname.split('/')[1];
        router.push(pathname.replace(`/${previousLanguage}`, `/${newLanguage}`));
        await i18n.changeLanguage(newLanguage);
        setActiveLanguage(newLanguage);
      }}
    >
      <Select.Trigger className="inline-flex h-9 items-center justify-center gap-1 self-end rounded-lg border-2 border-black bg-white px-4 text-sm leading-[inherit] text-black shadow-sm hover:bg-gray-100 radix-placeholder:text-black">
        <Select.Value />
        <Select.Icon className="overflow-visible [&_svg]:w-4">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border-2 border-black bg-white">
          <Select.Viewport className="p-1">
            <SelectItem key={activeLanugage} value={activeLanugage}>
              {languageNames.get(activeLanugage)}
            </SelectItem>
            <Select.Separator className="my-1 h-[2px] bg-black" />
            {otherLanguages.map(([code, caption]) => (
              <SelectItem key={code} value={code}>
                {caption}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = (props: Select.SelectItemProps) => (
  <Select.Item
    {...props}
    className="group relative flex h-6 select-none items-center rounded py-4 pl-6 pr-6 text-sm leading-[inherit] text-black radix-highlighted:bg-black radix-highlighted:text-white"
  >
    <Select.ItemText>{props.children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 ml-0.5 inline-flex w-6 content-center items-center [&_path]:fill-current [&_svg]:m-auto [&_svg]:w-3">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
);
