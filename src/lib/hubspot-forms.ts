import { useHubspotForm as useHubspotFormHook } from '@aaronhayes/react-use-hubspot-form'

const portalId = '39718632'

export function useHubspotForm(formId: string, targetId: string) {
  return useHubspotFormHook({ portalId, formId, target: `#${targetId}` })
}
