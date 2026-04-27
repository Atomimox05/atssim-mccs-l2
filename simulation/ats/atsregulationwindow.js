"use strict"

class ATSRegulationWindow {
    HTMLElement
    ats

    constructor(ats) {
        this.ats = ats
        this.HTMLElement = document.createElement("div")
        this.HTMLElement.style.width = "400px"
        this.HTMLElement.style.height = "500px"
        this.HTMLElement.style.backgroundColor = "#1a1a2e"
        this.HTMLElement.style.color = "white"
        this.HTMLElement.style.padding = "10px"
        this.HTMLElement.style.overflow = "auto"

        var title = document.createElement("h2")
        title.innerText = "Platform Terminus Configuration"
        title.style.marginTop = "0"
        title.style.borderBottom = "1px solid #444"
        title.style.paddingBottom = "10px"
        this.HTMLElement.appendChild(title)

        var instruction = document.createElement("p")
        instruction.innerText = "Select platforms that are terminal stations:"
        instruction.style.fontSize = "12px"
        instruction.style.color = "#aaa"
        this.HTMLElement.appendChild(instruction)

        var platformsContainer = document.createElement("div")
        platformsContainer.style.marginTop = "15px"

        this.ats.regulation.platforms.forEach(platform => {
            var platformRow = document.createElement("div")
            platformRow.style.display = "flex"
            platformRow.style.alignItems = "center"
            platformRow.style.marginBottom = "8px"
            platformRow.style.padding = "8px"
            platformRow.style.backgroundColor = "#2a2a4a"
            platformRow.style.borderRadius = "4px"

            var checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = `terminus_${platform.name}`
            checkbox.checked = platform.terminus === true
            checkbox.style.marginRight = "10px"
            checkbox.style.width = "18px"
            checkbox.style.height = "18px"
            checkbox.style.cursor = "pointer"

            checkbox.addEventListener("change", () => {
                this.ats.regulation.setTerminus(platform.name, checkbox.checked)
            })

            var label = document.createElement("label")
            label.htmlFor = `terminus_${platform.name}`
            label.innerText = platform.name.replace(/_/g, " ")
            label.style.cursor = "pointer"
            label.style.fontSize = "14px"

            platformRow.appendChild(checkbox)
            platformRow.appendChild(label)
            platformsContainer.appendChild(platformRow)
        })

        this.HTMLElement.appendChild(platformsContainer)
    }
}