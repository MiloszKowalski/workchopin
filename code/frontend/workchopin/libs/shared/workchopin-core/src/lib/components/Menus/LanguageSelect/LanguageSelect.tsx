'use client';

import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@workchopin/workchopin-core';

export const LanguageSelect = () => (
  <Select.Root defaultValue="pl">
    <Select.Trigger className="self-end inline-flex leading-[inherit] items-center justify-center gap-1 px-4 text-sm border-black border-2 text-black bg-white rounded-lg shadow-sm radix-placeholder:text-black h-9 hover:bg-gray-100">
      <Select.Value />
      <Select.Icon className="[&_svg]:w-4 overflow-visible">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white border-2 border-black rounded-md">
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
    className="relative leading-[inherit] flex items-center h-6 pl-6 py-4 pr-6 text-sm group text-black rounded select-none radix-highlighted:bg-black radix-highlighted:text-white"
  >
    <Select.ItemText>{props.children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 ml-0.5 inline-flex items-center content-center w-6 [&_svg]:w-3 [&_svg]:m-auto [&_path]:fill-current">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
);
