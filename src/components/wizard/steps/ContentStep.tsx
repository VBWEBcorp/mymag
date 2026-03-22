import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ImagePlus, Type, Upload } from 'lucide-react'
import { useWizard } from '@/context/WizardContext'
import { StepContainer } from '@/components/wizard/StepContainer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DEMO_IMAGES = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80',
  'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&q=80',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
  'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=80',
]

export function ContentStep() {
  const { dispatch } = useWizard()
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set())

  function toggleImage(index: number) {
    setSelectedImages((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  function handleContinue() {
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <StepContainer
      stepKey="content"
      title="Add your content"
      subtitle="Select photos and add text. Everything is editable later."
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <ImagePlus className="size-5 text-primary" />
            <h3 className="font-display text-base font-semibold">Photos</h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {selectedImages.size} selected
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {DEMO_IMAGES.map((src, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => toggleImage(i)}
                className={cn(
                  'relative aspect-square overflow-hidden rounded-xl border-2 transition-all',
                  selectedImages.has(i)
                    ? 'border-primary shadow-md shadow-primary/10 ring-2 ring-primary/20'
                    : 'border-transparent hover:border-border'
                )}
              >
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="size-full object-cover"
                  loading="lazy"
                />
                {selectedImages.has(i) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary/20"
                  >
                    <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {Array.from(selectedImages).indexOf(i) + 1}
                    </div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border/80 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
            <Upload className="size-4" />
            Upload your photos (demo)
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <Type className="size-5 text-primary" />
            <h3 className="font-display text-base font-semibold">Text</h3>
          </div>
          <div className="space-y-3">
            <textarea
              rows={3}
              placeholder="Write something for your magazine, or let the AI handle it..."
              className="w-full resize-none rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
              defaultValue="Dear Mom, this magazine is a little journey through our most beautiful memories together. Every page tells a part of our story..."
            />
            <p className="text-xs text-muted-foreground">
              The AI will automatically fill in empty sections with matching content.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center pt-2">
          <Button
            onClick={handleContinue}
            className="h-11 gap-2 rounded-xl px-8 text-sm font-semibold"
          >
            See preview
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </StepContainer>
  )
}
