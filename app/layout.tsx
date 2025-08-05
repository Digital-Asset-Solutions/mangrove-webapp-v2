"use client"

import Head from "next/head"
import React, { useEffect, useState } from "react"
import { Toaster } from "sonner"

import { PostHogProvider } from "@/components/PostHogProvider"
import AdminCommand from "@/components/stateful/admin-command/admin-command"
import DisclaimerDialog from "@/components/stateful/dialogs/disclaimer-dialog"
import { WrongNetworkAlertDialog } from "@/components/stateful/dialogs/wrong-network-dialog"
import { RootProvider } from "@/providers/root"

import Navbar from "@/components/navbar"
import "./globals.css"

const toastClasses =
  "!border !border-dark-green !text-sm !font-axiforma !text-white !bg-bg-secondary !font-normal !rounded-sm"
const titleClasses = "!font-medium"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [toastPosition, setToastPosition] = useState<
    "top-right" | "bottom-center"
  >("bottom-center")

  useEffect(() => {
    // Function to set position based on screen width
    const setPositionBasedOnScreenSize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setToastPosition("top-right")
      } else {
        setToastPosition("bottom-center")
      }
    }

    // Set initial position
    setPositionBasedOnScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", setPositionBasedOnScreenSize)

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", setPositionBasedOnScreenSize)
    }
  }, [])

  return (
    <html lang="en">
      <Head>
        <title>Mangrove</title>
        {/* Cloudflare Web Analytics - Disabled for deployment */}
        {/* {env.NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${env.NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )} */}
      </Head>
      <body>
        <div>
          <PostHogProvider>
            <RootProvider>
              <Navbar />
              <div className="px-4">{children}</div>
              <AdminCommand />
              <WrongNetworkAlertDialog />
              <DisclaimerDialog />
            </RootProvider>
          </PostHogProvider>
          <Toaster
            position={toastPosition}
            toastOptions={{
              className: toastClasses,
              classNames: {
                toast: toastClasses,
                title: titleClasses,
                error: "!fill-red-100 border-red-900",
                success: "!fill-green-caribbean border-border-brand",
              },
              style: {
                backgroundColor: "bg-bg-secondary",
                fontFamily: "Axiforma",
                fontSize: "14px",
                border: " solid border-border-tertiary",
              },
            }}
          />
        </div>
      </body>
    </html>
  )
}
