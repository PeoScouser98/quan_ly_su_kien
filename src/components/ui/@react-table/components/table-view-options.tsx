'use client'

import { Table } from '@tanstack/react-table'
import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Icon } from '../..'

interface DataTableViewOptionsProps<TData> {
   table: Table<TData>
}

export function TableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant='outline' size='sm' className='inline-flex items-center gap-x-2'>
               <Icon name='SlidersHorizontal' />
               View
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
               .getAllColumns()
               .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
               .map((column) => {
                  return (
                     <DropdownMenuCheckboxItem
                        key={column.id}
                        className='whitespace-nowrap capitalize'
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                     >
                        {column.columnDef.header?.toString()}
                     </DropdownMenuCheckboxItem>
                  )
               })}
         </DropdownMenuContent>
      </DropdownMenu>
   )
}