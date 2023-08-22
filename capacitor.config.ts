import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "net.prestalife.tapmic",
  appName: "tapmic",
  webDir: "dist",
  server: {
    androidScheme: "https"
  }
}

export default config
