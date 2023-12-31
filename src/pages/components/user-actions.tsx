import {
   Avatar,
   AvatarFallback,
   AvatarImage,
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
   Icon
} from '@/components/ui'
import Tooltip from '@/components/ui/@override/tooltip'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { signout } from '@/redux/slices/auth.slice'
import { toast } from 'sonner'

const UserActions: React.FunctionComponent = () => {
   const user = useAppSelector((state) => state.auth?.user)
   const dispatch = useAppDispatch()

   const handleSignout = () => {
      dispatch(signout())
      localStorage.removeItem('access_token')
      toast.info('Đã đăng xuất thành công')
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className='flex items-center space-x-2 focus:border-none focus:outline-none sm:space-x-1'>
            <Avatar className='h-8 w-8 gap-0'>
               <AvatarImage src={user?.avatar} className='aspect-square h-8 w-8 rounded-full' width={32} height={32} />
               <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Tooltip content={user?.name!}>
               <span className='max-w-[128px] pl-1 pr-2 text-left text-sm font-normal sm:hidden'>{user?.name}</span>
            </Tooltip>
            <Icon name='ChevronDown' className='sm:hidden' />
         </DropdownMenuTrigger>
         <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               Tài khoản của tôi
               <DropdownMenuShortcut>
                  <Icon name='User' />
               </DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleSignout}>
               Đăng xuất
               <DropdownMenuShortcut>
                  <Icon name='LogOut' />
               </DropdownMenuShortcut>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default UserActions
