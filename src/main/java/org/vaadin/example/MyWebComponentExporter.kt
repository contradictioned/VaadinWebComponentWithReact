package org.vaadin.example

import com.vaadin.flow.component.WebComponentExporter
import com.vaadin.flow.component.webcomponent.WebComponent

class MyWebComponentExporter : WebComponentExporter<MainView>("my-web-component") {
    init {
        addProperty("initial-name", "none").onChange { mainView, newValue ->
            mainView.setPlaceholer(newValue)
        }
    }

    override fun configureInstance(webComponent: WebComponent<MainView>?, component: MainView?) {
    }
}