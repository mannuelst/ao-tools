"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type MunicipeComboboxProps = {
	provinces: { value: string; label: string }[];
};

export function MunicipeCombobox({
	provinces,
}: MunicipeComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? provinces.find((province) => province.value === value)
								?.label
						: "Pesquisar província..."}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput
						placeholder="Pesquisar província..."
						className="h-9"
					/>
					<CommandEmpty>Nenhuma província encontrada.</CommandEmpty>

					<CommandGroup>
						{provinces.map((province) => (
							<CommandItem
								key={province.value}
								value={province.value}
								onSelect={(currentValue) => {
									setValue(
										currentValue === value ? "" : currentValue,
									);
									setOpen(false);
								}}
							>
								{province.label}
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === province.value
											? "opacity-100"
											: "opacity-0",
									)}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
