(ns cloud-itonami.sanctions.state
  "App state for the sanctions screening appview UI. Ported 1:1 from the
  former svelte/src/routes/+page.svelte template shell — a single static
  screen describing the app surface (title / project / routes / bindings /
  source path). Single reagent atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Sanctions Sn4c8t1x"
          :project "etzhayyim-project-sanctions"
          :name "etzhayyim-wasm-sanctions-sn4c8t1x"
          :kind "appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-sanctions/appview/etzhayyim-wasm-sanctions-sn4c8t1x/svelte/src/routes/+page.svelte"}}))
