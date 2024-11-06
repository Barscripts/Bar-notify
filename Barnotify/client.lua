function notify(title, message, type)
    SendNUIMessage({
        type = "notification",
        title = title,           
        message = message,       
        messageType = type       
    })
end

RegisterCommand("notifytest", function(source, args, rawCommand)
    notify("info", "your text here.", "info")
    notify("success", "your text here", "success")
    notify("error", "your text here", "error")
    notify("warn", "your text here", "warn")
end, false)
exports('notify', function(title, message, type)
    notify(title, message, type)
end)
RegisterCommand("notify", function(source, args, rawCommand)
    local msgType = args[1] or "info"  
    local title = args[2] or "Pranešimas" 
    local msg = table.concat(args, " ", 3) 
    notify(title, msg, msgType)
end, false)

