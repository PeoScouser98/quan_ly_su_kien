import { Box } from '@/components/ui'
import PlaceHolderCard from './event-placeholder-card'

const Loading: React.FunctionComponent = () => {
   const presetItems = Array.apply(null, Array(12)).map((_, i) => i)
   return (
      <Box className='grid w-full grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-2 md:md:grid-cols-3'>
         {presetItems.map((item) => (
            <PlaceHolderCard key={item} />
         ))}
      </Box>
   )
}

export default Loading
