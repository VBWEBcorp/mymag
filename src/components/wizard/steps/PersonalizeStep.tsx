import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useWizard } from '@/context/WizardContext'
import { StepContainer } from '@/components/wizard/StepContainer'
import { Button } from '@/components/ui/button'

export function PersonalizeStep() {
  const { state, dispatch } = useWizard()
  const isGift = state.magazine.category === 'gift'

  const [title, setTitle] = useState(state.magazine.title || '')
  const [recipientName, setRecipientName] = useState(state.magazine.recipientName || '')
  const [senderName, setSenderName] = useState(state.magazine.senderName || '')
  const [message, setMessage] = useState(state.magazine.message || '')

  function handleContinue() {
    dispatch({
      type: 'SET_PERSONALIZATION',
      payload: {
        title: title || 'My Magazine',
        recipientName,
        senderName,
        message,
      },
    })
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <StepContainer
      stepKey="personalize"
      title="Personalize your magazine"
      subtitle="This info helps us create unique, tailored content just for you."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-lg space-y-5"
      >
        <div className="glass rounded-2xl p-6 space-y-5">
          <div>
            <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-foreground">
              Magazine title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Happy Birthday Mom!"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {isGift && (
            <div>
              <label htmlFor="recipient" className="mb-1.5 block text-sm font-medium text-foreground">
                Who is this magazine for?
              </label>
              <input
                id="recipient"
                type="text"
                placeholder="e.g. Mom, Sophie, Paul..."
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          )}

          <div>
            <label htmlFor="sender" className="mb-1.5 block text-sm font-medium text-foreground">
              Your name
            </label>
            <input
              id="sender"
              type="text"
              placeholder="e.g. Marie"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              A personal note (optional)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="A personal message that will appear in the magazine..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            onClick={handleContinue}
            className="h-11 gap-2 rounded-xl px-8 text-sm font-semibold"
          >
            Continue
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </motion.div>
    </StepContainer>
  )
}
