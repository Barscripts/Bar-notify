RegisterCommand("notifytest", function(source, args, rawCommand)
    if #args < 4 then
        print("Neužtektinai argumentų")
        return
    end
    local title = args[1]   
    local message = table.concat(args, " ", 2, #args - 1)  
    local messageType = args[#args - 1] 
    TriggerClientEvent("Barnotify:notify", -1, title, message, messageType, duration)
end)
