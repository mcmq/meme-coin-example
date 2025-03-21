"use client"

import React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "../lib/utils"

type AnimationProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  distance = 50,
  threshold = 0.1,
}: AnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const directionStyles = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  const initial = direction === "none" ? { opacity: 0 } : { opacity: 0, ...directionStyles[direction] }

  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1], // Smooth easing
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform: isInView
          ? "translate(0, 0)"
          : `translate(${direction === "left" ? distance : direction === "right" ? -distance : 0}px, ${direction === "up" ? distance : direction === "down" ? -distance : 0}px)`,
        opacity: isInView ? 1 : 0,
        transition: `transform ${duration}s ${delay}s cubic-bezier(0.25, 0.1, 0.25, 1), opacity ${duration}s ${delay}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = "up",
  once = true,
  threshold = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  once?: boolean
  threshold?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        return (
          <ScrollAnimation
            delay={initialDelay + index * staggerDelay}
            direction={direction}
            once={once}
            threshold={threshold}
          >
            {child}
          </ScrollAnimation>
        )
      })}
    </div>
  )
}

