'use client';

import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@workchopin/workchopin-core';

export const LanguageSelect = () => (
  <Select.Root defaultValue="pl">
    <Select.Trigger className="inline-flex h-9 items-center justify-center gap-1 self-end rounded-lg border-2 border-black bg-white px-4 text-sm leading-[inherit] text-black shadow-sm hover:bg-gray-100 radix-placeholder:text-black">
      <Select.Value />
      <Select.Icon className="overflow-visible [&_svg]:w-4">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md border-2 border-black bg-white">
        <Select.Viewport className="p-1">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="pl">Polski</SelectItem>
        </Select.Viewport>
        <Select.Arrow />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

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
